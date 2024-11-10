 const getIcon = (icon: string) => {
    const iconName = icon.toLowerCase();
    console.log(iconName)
    return `/icons/${iconName}.png`
}

export default getIcon