type RestaurantLayoutProps = {
    children: React.ReactNode;
}

export const metadata = {
    title: 'Reserve at Restaurant',
    description: 'Generated by create next app',
}

const RestaurantLayout = ({children}: RestaurantLayoutProps) => {
    return (
        <>
            <>
                {children}
            </>
        </>
    )
}

export default RestaurantLayout;