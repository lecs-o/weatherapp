 const getIcon = (icon: string) => {
    const iconName = icon.toLowerCase();
    return `/weatherapp/${iconName}.png`
}

export default getIcon