import React from 'react'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { DollarSign, ShoppingBag, Users } from 'lucide-react'

const AdminDashboard = () => {
    return (
        <div className="flex flex-col p-4 gap-4">
            <div className="flex flex-row gap-4">
                <Card className='w-1/3 border border-primary hover:shadow-lg transition-shadow'>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Total Users
                        </CardTitle>
                        <Users className="h-6 w-6 text-primary" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">10000</div>
                    </CardContent>
                </Card>
                <Card className='w-1/3 border border-primary hover:shadow-lg transition-shadow'>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Active Users
                        </CardTitle>
                        <Users className="h-6 w-6 text-primary" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">9100</div>
                    </CardContent>
                </Card>
                <Card className='w-1/3 border border-primary hover:shadow-lg transition-shadow'>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Total Orders
                        </CardTitle>
                        <ShoppingBag className="h-6 w-6 text-primary" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">10,000</div>
                    </CardContent>
                </Card>
            </div>
            <div className="flex flex-col gap-4 mt-4">
                <Card className='w-full border border-primary hover:shadow-lg transition-shadow'>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">
                            Admin Options
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col gap-2">
                            <button className="px-4 py-2 bg-primary text-white rounded transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 active:bg-primary-dark">Manage Users</button>
                            <button className="px-4 py-2 bg-primary text-white rounded transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 active:bg-primary-dark">View Reports</button>
                            <button className="px-4 py-2 bg-primary text-white rounded transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 active:bg-primary-dark">Settings</button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default AdminDashboard
