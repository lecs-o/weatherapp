 const getIcon = (icon: string) => {
    const iconName = icon.toLowerCase();
    return `/${iconName}.png`
}

export default getIcon