import React from 'react';
import { Button } from './Button'; 

type ErrorStateProps = {
    message: string;
    onRetry?: () => void;
};

export const ErrorState: React.FC<ErrorStateProps> = ({ message, onRetry }) => (
    <div className="text-center py-8 text-red-600">
        <p className="mb-4">⚠️ {message}</p>
        {onRetry && <Button type="button" onClick={onRetry}>Reintentar</Button>}
    </div>
);