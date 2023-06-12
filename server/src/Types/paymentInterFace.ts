export interface PaymentInterface {
    _id?: string
    amount: string
    user: object
    card: object
    userId: string
    courseId: string
    date: Date
}