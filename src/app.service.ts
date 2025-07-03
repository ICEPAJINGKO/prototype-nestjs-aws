import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    getHello(): string {
        return 'Hello World!';
    }

    healthCheck(): { status: string; timestamp: string } {
        const now = new Date();
        const timezoneOffset = -now.getTimezoneOffset();
        const sign = timezoneOffset >= 0 ? '+' : '-';
        const hours = Math.floor(Math.abs(timezoneOffset) / 60)
            .toString()
            .padStart(2, '0');
        const minutes = Math.abs(timezoneOffset % 60)
            .toString()
            .padStart(2, '0');

        const isoString = now.toISOString().slice(0, -1); // Remove 'Z'
        const timezone = `${sign}${hours}:${minutes}`;

        return {
            status: 'OK',
            timestamp: `${isoString}${timezone}`,
        };
    }
}
