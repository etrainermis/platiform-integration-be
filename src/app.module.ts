import { Module, OnModuleInit } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MailerModule } from '@nestjs-modules/mailer';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SchoolModule } from './modules/school/school.module';
import { SurveyModule } from './modules/survey/survey.module';
import { PedagogyCertifiedModule } from './modules/pedagogy/pedagogy-certified.module';
import { WorkshopStatusModule } from './modules/workshop/workshop-status.module';
import { WorkshopStatus } from './entities/workshop-status.entity';
import { SchoolsByType } from './entities/schools-by-type.entity';
import { SchoolsByTypeModule } from './modules/schools-type/schools-by-type.module';
import { SchoolConnectivity } from './entities/school-connectivity.entity';
import { SchoolConnectivityModule } from './modules/school-connectivity/school-connectivity.module';
import { StudentGenderDistribution } from './entities/student-gender-distribution.entity';
import { StudentGenderDistributionModule } from './modules/student-gender-distribution/student-gender-distribution.module';
import { StudentPerformanceAnalysis } from './entities/student-performance-analysis.entity';
import { StudentPerformanceAnalysisModule } from './modules/student-performance-analysis/student-performance-analysis.module';
import { ElectricalConnectivityModule } from './modules/electrical-connectivity/electrical-connectivity.module';
import { ComputerLabsStatusModule } from './modules/computer-labs-status/computer-labs-status.module';
import { InternetConnectivityTrendModule } from './modules/internet-connectivity-trend/internet-connectivity-trend.module';
import { ElectricalConnectivity } from './entities/electrical-connectivity.entity';
import { InternetConnectivityTrend } from './entities/internet-connectivity-trend.entity';
import { ComputerLabsStatus } from './entities/computer-labs-status.entity';
import { Stat } from './entities/stat.entity';
import { StatsModule } from './modules/stats/stats.module';
import { TrendMonth } from './entities/trend-month.entity';



@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        url: process.env.DATABASE_URL,
        entities: [
          WorkshopStatus,
          SchoolsByType,
          SchoolConnectivity,
          StudentGenderDistribution,
          StudentPerformanceAnalysis,
          ComputerLabsStatus,
          ElectricalConnectivity,
          InternetConnectivityTrend,
          Stat,
          TrendMonth
          
        ],
        // ssl: {
        //   rejectUnauthorized: true,
        // },
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    MailerModule.forRoot({
      transport: {
        host: process.env.EMAIL_HOST,
        port: parseInt(process.env.EMAIL_PORT || '587'),
        secure: false,
        auth: {
          user: process.env.EMAIL_USERNAME,
          pass: process.env.EMAIL_PASSWORD,
        },
      },
    }),
    SchoolModule,
    SurveyModule,
    PedagogyCertifiedModule,
    WorkshopStatusModule,
    SchoolsByTypeModule,
    SchoolConnectivityModule,
    StudentGenderDistributionModule,
    StudentPerformanceAnalysisModule,
    ElectricalConnectivityModule,
    ComputerLabsStatusModule,
    InternetConnectivityTrendModule,
    StatsModule
  ],

})
export class AppModule implements OnModuleInit {
  constructor(private readonly configService: ConfigService) {}
  onModuleInit() {
    console.log(this.configService.get('DATABASE_URL'));
  }
}

