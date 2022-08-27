export class Leave {
    constructor(
        public leaveId: number,
        public firstName: string,
        public lastName: string,
        public leaveType: string,
        public startDate: string,
        public endDate: string,
        public reason: string,
        public status: string,
        public dateOfCreation: string,
        public approvedBy: string
    ) {}
}
