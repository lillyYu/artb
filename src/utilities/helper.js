export const formatNumber = (num) => {
    if (typeof num === 'number' || typeof num === 'string') {
        return num.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    } else {
        return null;
    }
}