import mongoose, { Schema, model } from 'mongoose';

const UserSchema = Schema(
    {
        email_id: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        phone_number: {
            type: String
        },
        fullname: {
            type: String,
            required: true
        },
        photo: {
            type: String
        },
        social_login: {
            is_social: {
                type: Boolean,
                default: false
            },
            social_type: {
                type: String,
                enum: ['google', 'apple', 'facebook', 'NA'],
                default: 'NA'
            },
        },
        verification: {
            verification_code: String,
            verification_expiry: {
                type: Date,
                required: true
            }
        },
        is_verified: {
            type: Boolean,
            default: false
        },
        is_subscribe: {
            type: Boolean,
            default: false
        },

        plan: {
            active_plan: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'plan'
            },
            expiry_date: {
                type: Date
            }
        },
        billing_info: [
            {
                id: Number,
                name: String,
                country: String,
                state: String,
                city: String,
                address: String,
                tax_type: String,
                tax_id: String,
            }
        ],
        bills: [
            {
                id: {
                    type: Number,
                    required: true
                },
                date: {
                    type: Date,
                    required: true
                },
                name: {
                    type: String,
                    required: true
                },
                address: {
                    type: String,
                    required: true
                },
                tax_type: String,
                tax_id: String,
                products: [
                    {
                        id: String,
                        name: String,
                        price: Number,
                        dicount_percent: Number,
                        final_amount: Number
                    }
                ],
                total_amount: {
                    type: String,
                    required: true
                }
            }
        ]
    }
);

export default model('user', UserSchema);