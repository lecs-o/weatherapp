const errorsDictionary = {
    400: 'Please enter a valid city name for your search.',
    401: 'Access denied. You do not have permission to use the API.',
    404: 'Resource not found. The requested API source could not be located.',
    429: 'Too many requests. Please wait a moment before trying again.',
    500: 'The API is currently unavailable. Please try again later.'
};

export const createErrorString = (errorCode: number) => {
    return errorsDictionary[errorCode as keyof typeof errorsDictionary] || 'An unexpected error occurred. Please try again later.';
};
