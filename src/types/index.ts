export enum complexity {
    'Hight' = '10+',
    'Medium' = '5-10',
    'Low_H' = '3-5',
    'Low' = '1-3',
}

export type RunResults = {
    Algorithm: string
    duration: number
    complexity: complexity
}

export type Run = () => Promise<RunResults>