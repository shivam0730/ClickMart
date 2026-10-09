import StoreLayout from "@/components/store/StoreLayout";

export const metadata = {
    title: "ClickMart. - Store Dashboard",
    description: "ClickMart. - Store Dashboard",
};

export default function RootAdminLayout({ children }) {

    return (
        <>
            <StoreLayout>
                {children}
            </StoreLayout>
        </>
    );
}
