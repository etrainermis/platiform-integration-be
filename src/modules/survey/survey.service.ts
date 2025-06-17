// src/survey/survey.service.ts
import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class SurveyService {
  constructor(
    private readonly httpService: HttpService,
    private readonly authService: AuthService,
  ) {}

  async getCompleteSurveysByUser(): Promise<any> {
    const email = 'systemadmin@gmail.com';
    const password = 'Admin.RTB@132';

    const token = await this.authService.getAccessToken(email, password);

    const url =
      'https://api.tvetmanagement.rtb.gov.rw/ETrainerBackend/api/v1/school-survey/by-logged-in-user/COMPLETE?page=1&size=10';

    const response = await firstValueFrom(
      this.httpService.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    );

    const surveys = response.data.data?.content || [];

    function getTotalStudents(schoolData) {
      return schoolData.school.trades.reduce(
        (schoolInfo, trade) => {
          const tradeInfo = trade.levels.reduce(
            (acc, level) => {
              acc.male += level.students.male;
              acc.female += level.students.female;
              return acc;
            },
            { male: 0, female: 0 },
          );

          schoolInfo.male += tradeInfo.male;
          schoolInfo.female += tradeInfo.female;
          schoolInfo.total += tradeInfo.male + tradeInfo.female;

          return schoolInfo;
        },
        { total: 0, male: 0, female: 0 },
      );
    }

    // Function to get electrical connectivity status
function getElectricalConnectivityStatus(schoolData) {
  const energySources = schoolData?.it?.energySources || [];
  
  // Define energy source categories
  const renewableSources = ['Solar', 'Wind', 'Hydro', 'Biogas', 'Geothermal'];
  const gridSources = ['Grid'];
  
  const status = {
    grid: {
      connected: energySources.some(source => gridSources.includes(source)),
      sources: energySources.filter(source => gridSources.includes(source))
    },
    solar: {
      connected: energySources.includes('Solar'),
      available: energySources.includes('Solar')
    },
    renewable: {
      connected: energySources.some(source => renewableSources.includes(source)),
      sources: energySources.filter(source => renewableSources.includes(source)),
      types: [...new Set(energySources.filter(source => renewableSources.includes(source)))]
    },
    summary: {
      totalSources: energySources.length,
      allSources: energySources,
      primarySource: energySources[0] || 'None',
      hasElectricity: energySources.length > 0,
      isOffGrid: !energySources.includes('Grid') && energySources.length > 0,
      gridDependent: energySources.includes('Grid') && energySources.length === 1,
      hasBackup: energySources.length > 1,
      noElectricity: energySources.length === 0
    }
  };
  
  return status;
}

// Function to get computer lab status and availability
function getComputerLabStatus(schoolData) {
  const computerLab = schoolData?.it?.computerLab || {};
  const equipment = schoolData?.it?.equipment || {};
  const infrastructure = schoolData?.infrastructure || [];
  
  // Calculate percentages and ratios
  const totalComputers = computerLab.totalComputers || 0;
  const workingComputers = computerLab.workingComputers || 0;
  const nonWorkingComputers = computerLab.nonWorkingComputers || 0;
  const totalProjectors = computerLab.totalProjectors || 0;
  const workingProjectors = computerLab.workingProjectors || 0;
  
  // Count computer labs from infrastructure data
  const computerLabsInInfrastructure = infrastructure.filter(item => 
    item.type && item.type.toLowerCase().includes('computer lab')
  );
  const totalComputerLabs = computerLabsInInfrastructure.length;
  
  const computerWorkingPercentage = totalComputers > 0 ? 
    Math.round((workingComputers / totalComputers) * 100) : 0;
  const projectorWorkingPercentage = totalProjectors > 0 ? 
    Math.round((workingProjectors / totalProjectors) * 100) : 0;
  
  const status = {
    availability: {
      hasComputerLab: totalComputers > 0 || totalComputerLabs > 0 || Object.keys(computerLab).length > 0,
      totalComputerLabs: totalComputerLabs,
      labsDetails: computerLabsInInfrastructure.map(lab => ({
        size: lab.size || 'unknown',
        status: lab.status || 'unknown', 
        capacity: lab.capacity || 'unknown',
        materials: lab.materials || [],
        constructionYear: lab.constructionYear || 'unknown'
      })),
      hasLAN: computerLab.hasLAN || false,
      hasProjectors: computerLab.hasProjectors || false,
      equipmentStatus: equipment.status || 'unknown',
      hasAssetRegister: equipment.hasAssetRegister || false
    },
    computers: {
      total: totalComputers,
      working: workingComputers,
      nonWorking: nonWorkingComputers,
      workingPercentage: computerWorkingPercentage,
      functionalityStatus: computerWorkingPercentage >= 80 ? 'excellent' :
                          computerWorkingPercentage >= 60 ? 'good' :
                          computerWorkingPercentage >= 40 ? 'fair' : 'poor'
    },
    projectors: {
      total: totalProjectors,
      working: workingProjectors,
      nonWorking: totalProjectors - workingProjectors,
      workingPercentage: projectorWorkingPercentage,
      functionalityStatus: projectorWorkingPercentage >= 80 ? 'excellent' :
                          projectorWorkingPercentage >= 60 ? 'good' :
                          projectorWorkingPercentage >= 40 ? 'fair' : 'poor'
    },
    infrastructure: {
      networkConnectivity: computerLab.hasLAN ? 'available' : 'not_available',
      presentationCapability: computerLab.hasProjectors ? 'available' : 'not_available'
    },
  };
  
  return status;
}

    const simplifiedSurveys = surveys.map((survey: any) => {
      try {
        const generalInfo = JSON.parse(survey.generalInformation || '{}');
        const strategicPlanning = JSON.parse(survey.strategicPlanning || '{}');
        const students = getTotalStudents(generalInfo);
        const elecricity = getElectricalConnectivityStatus(generalInfo);
        const computerLab = getComputerLabStatus(generalInfo);
        const businessPlan = strategicPlanning.businessPlan;
        console.log('generalInfo', generalInfo);

        return {
          schoolName: generalInfo.school?.name,
          schoolEmail: generalInfo.school?.email,
          schoolStatus: generalInfo.school?.status,
          maleTeachers: generalInfo.school?.stats?.maleTeachers,
          femaleTeachers: generalInfo.school?.stats?.femaleTeachers,
          students,
          elecricity: elecricity,
          computerLab: computerLab,
          productionUnits: businessPlan,
        };
      } catch (err) {
        console.error('Error parsing generalInformation:', err);
        return null;
      }
    });

    return simplifiedSurveys.filter(Boolean);
  }
}
