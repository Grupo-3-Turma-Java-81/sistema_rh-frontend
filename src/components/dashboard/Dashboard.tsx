import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
} from 'recharts';
import React from 'react';

const data = [
    { mes: 'Jan', ativos: 45 },
    { mes: 'Fev', ativos: 50 },
    { mes: 'Mar', ativos: 48 },
    { mes: 'Abr', ativos: 52 },
    { mes: 'Mai', ativos: 55 },
    { mes: 'Jun', ativos: 60 },
];

const Dashboard: React.FC = () => {
    return (
        <div
            className="p-6 rounded-xl flex-1 ml-6 shadow-md"
            style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #11C5D9'
            }}
        >
            <h2
                className="text-2xl font-semibold mb-4"
                style={{ color: '#00070D' }}
            >
                Total de Funcionários Ativos por Mês
            </h2>

            <ResponsiveContainer width="100%" height={215}>
                <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#81868C" />
                    <XAxis dataKey="mes" stroke="#81868C" />
                    <YAxis stroke="#81868C" />
                    <Tooltip />
                    <Bar dataKey="ativos" fill="#11C5D9" radius={[6, 6, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Dashboard;