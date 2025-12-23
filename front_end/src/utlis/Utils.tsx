export const Utils = (totalBalance: string) => {

    const isNegative = totalBalance.startsWith('-');
    const textColor = isNegative ? "danger" : "success";
    const displayValue = isNegative ? totalBalance.replace('-', '') : totalBalance;
    return { textColor, displayValue, isNegative }
}

