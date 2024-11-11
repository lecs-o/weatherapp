const getIcon = (icon: string) => {
    const iconName = icon.toLowerCase();
    return `/icons/${iconName}.png`
}

export default getIcon