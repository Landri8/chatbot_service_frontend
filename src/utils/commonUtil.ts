export const formatJoinedDate = (date: string) => {
    const year = date.substring(0, 4);
    const month = date.substring(4, 6);
    const day = date.substring(6, 8);
    
    const newDate = new Date(`${year}-${month}-${day}`);

    // Format using Intl.DateTimeFormat
    return new Intl.DateTimeFormat("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
    }).format(newDate);
}

export const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
        style: "decimal",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(price);
}


export function formatTimestamp() {
    const now = new Date();
    
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Ensure 2 digits
    const day = String(now.getDate()).padStart(2, '0');

    return `${year}${month}${day}`;
}