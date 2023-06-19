export interface PaymentInterface {
    _id?: string
    amount: number
    user: object
    card: object
    userId: string
    courseId: string
    date: Date
}