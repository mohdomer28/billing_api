import { Schema, model } from 'mongoose';

const PlanSchema = Schema(
    {
        plan_name: String,
        price: Number,
        discount_percentage: Number,
        final_amount: Number,
        duration: Number
    }
);
export default model('plan', PlanSchema);