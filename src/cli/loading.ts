import ora from "ora"


export const loadingSpinner = (loadingMessage?: string) => {
    const spinner = ora(loadingMessage);
    return spinner
}