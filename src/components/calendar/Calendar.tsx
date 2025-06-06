import React, { useState } from 'react';

const dayNames = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

function getDaysInMonth(year: number, month: number) {
    return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
    return new Date(year, month, 1).getDay();
}

const Calendar: React.FC = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const daysInMonth = getDaysInMonth(year, month);
    const firstDayIndex = getFirstDayOfMonth(year, month);

    const prevMonth = () => {
        setCurrentDate(new Date(year, month - 1, 1));
    };

    const nextMonth = () => {
        setCurrentDate(new Date(year, month + 1, 1));
    };

    const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    const paddedDays = [...Array(firstDayIndex).fill(null), ...daysArray];

    return (
        <div
            className="w-full max-w-md mx-auto rounded-xl p-4 mb-8 transition-transform duration-300 hover:shadow-xl hover:-translate-y-1"
            style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #11C5D9',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
        >

            <div className="flex justify-between items-center mb-4">
                <button
                    onClick={prevMonth}
                    aria-label="Mês anterior"
                    style={{ color: '#11C5D9' }}
                    className="text-xl px-3 font-bold hover:text-[#00070D] transition-colors duration-200"
                >
                    &lt;
                </button>

                <h2
                    className="text-lg font-semibold capitalize select-none"
                    style={{ color: '#00070D' }}
                >
                    {currentDate.toLocaleString('default', { month: 'long' })} {year}
                </h2>

                <button
                    onClick={nextMonth}
                    aria-label="Próximo mês"
                    style={{ color: '#11C5D9' }}
                    className="text-xl px-3 font-bold hover:text-[#00070D] transition-colors duration-200"
                >
                    &gt;
                </button>
            </div>

            <div
                className="grid grid-cols-7 text-center text-sm font-semibold mb-2 select-none"
                style={{ color: '#81868C' }}
            >
                {dayNames.map((day) => (
                    <div key={day}>{day}</div>
                ))}
            </div>

            <div className="grid grid-cols-7 text-center text-sm" style={{ color: '#00070D' }}>
                {paddedDays.map((day, index) => (
                    <div key={index} className="py-2">
                        {day ? (
                            <span
                                className="inline-block w-8 h-8 leading-8 rounded-full cursor-pointer font-semibold transition-colors duration-200"
                                style={{
                                    color: '#00070D',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = '#11C5D9';
                                    e.currentTarget.style.color = '#FFFFFF';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = 'transparent';
                                    e.currentTarget.style.color = '#00070D';
                                }}
                            >
                                {day}
                            </span>
                        ) : (
                            <span className="inline-block w-8 h-8" />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Calendar;