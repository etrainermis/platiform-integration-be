import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InternetConnectivityTrend } from '../../entities/internet-connectivity-trend.entity';
import { TrendMonth } from '../../entities/trend-month.entity'; // ✅ Import the TrendMonth entity
import { InternetConnectivityTrendService } from './internet-connectivity-trend.service';
import { InternetConnectivityTrendController } from './internet-connectivity-trend.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      InternetConnectivityTrend,
      TrendMonth, // ✅ Register the entity here
    ]),
  ],
  providers: [InternetConnectivityTrendService],
  controllers: [InternetConnectivityTrendController],
})
export class InternetConnectivityTrendModule {}
