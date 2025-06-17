import { Controller, Get, Put, Body, Patch } from '@nestjs/common';
import { InternetConnectivityTrendService } from './internet-connectivity-trend.service';
import { UpdateInternetConnectivityTrendDto } from '../../common/dtos/update-internet-connectivity-trend.dto';
import { InternetConnectivityTrend } from '../../entities/internet-connectivity-trend.entity';

@Controller('internet-connectivity-trend')
export class InternetConnectivityTrendController {
  constructor(private readonly service: InternetConnectivityTrendService) {}

  @Get()
  getStatus(): Promise<InternetConnectivityTrend> {
    return this.service.getStatus();
  }

  @Patch()
  updateStatus(
    @Body() dto: UpdateInternetConnectivityTrendDto,
  ): Promise<InternetConnectivityTrend> {
    return this.service.updateStatus(dto);
  }
}