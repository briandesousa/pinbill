export class BillEvent {
    
    constructor(
        public eventId: number,
        public billProviderId: number,
        public eventName: String,
        public startDateTime: String,
        public endDateTime: String
    ) {}
}