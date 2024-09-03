// components/CountdownTimer.tsx
"use client";
import { useEffect, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const CountdownTimer: React.FC = () => {
    const { language } = useLanguage();
    const temp = new Date('2024-09-10T09:00:00');
    const targetDate = temp.getTime();
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const calculateTimeLeft = (): TimeLeft => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                return { days: 0, hours: 0, minutes: 0, seconds: 0 };
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            return { days, hours, minutes, seconds };
        };

        const updateCountdown = () => {
            setTimeLeft(calculateTimeLeft());
        };

        updateCountdown();
        const intervalId = setInterval(updateCountdown, 1000);

        return () => clearInterval(intervalId);
    }, [targetDate]);

    return (
        <div className="flex flex-col items-center text-center">
            {language === 'ENG' ? (
                <div>
                    <div className="text-3xl font-bold mb-4">
                        <span className="bg-gray-800 text-accent px-4 py-2 rounded-lg">{String(timeLeft.days).padStart(2, '0')}</span> day(s)
                        <span className="bg-gray-800 text-accent px-4 py-2 rounded-lg mx-2">{String(timeLeft.hours).padStart(2, '0')}</span> hour(s)
                        <span className="bg-gray-800 text-accent px-4 py-2 rounded-lg mx-2">{String(timeLeft.minutes).padStart(2, '0')}</span> minute(s)
                        <span className="bg-gray-800 text-accent px-4 py-2 rounded-lg mx-2">{String(timeLeft.seconds).padStart(2, '0')}</span> second(s)
                    </div>
                    <p className="text-accent">This will be available on {temp.getDate() + '/' + temp.getMonth() + '/' + temp.getFullYear() + ' at ' + temp.getHours() + " o'clock"}</p>
                </div>
            ) : (
                <div>
                    <div className="text-3xl font-bold mb-4">
                        <span className="bg-gray-800 text-accent px-4 py-2 rounded-lg">{String(timeLeft.days).padStart(2, '0')}</span> jour(s)
                        <span className="bg-gray-800 text-accent px-4 py-2 rounded-lg mx-2">{String(timeLeft.hours).padStart(2, '0')}</span> heure(s)
                        <span className="bg-gray-800 text-accent px-4 py-2 rounded-lg mx-2">{String(timeLeft.minutes).padStart(2, '0')}</span> minute(s)
                        <span className="bg-gray-800 text-accent px-4 py-2 rounded-lg mx-2">{String(timeLeft.seconds).padStart(2, '0')}</span> seconde(s)
                    </div>
                    <p className="text-accent">Ce sera disponible le {temp.getDate() + '/' + temp.getMonth() + '/' + temp.getFullYear() + ' à ' + temp.getHours() + ' heure'}</p>
                </div>
            )}
        </div>
    );
};

export default CountdownTimer;
