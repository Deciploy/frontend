import { User } from "./user";

export interface ApplicationType {
    id: string;
    name: string;
}

export interface Application {
    id: string;
    name: string;
    author: string;
    theme: string;
    logo: string;
    type: ApplicationType;
}

export interface Activity {
    application: Application;
    name: string;
    title: string;
    startTime: string;
    endTime: string;
    syncTime: string;
    user: User;
}