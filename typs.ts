type Navigation = {
    navigate: (routeName: string) => void,
    push: (routeName: string) => void,
    pop: ()=>void,
    popToTop: ()=>void,
    goBack: ()=>void,
    replace: (routeName: string) => void,
}

export default Navigation