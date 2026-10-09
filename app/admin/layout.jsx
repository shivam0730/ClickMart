import AdminLayout from "@/components/admin/AdminLayout";

export const metadata = {
    title: "ClickMart. - Admin",
    description: "ClickMart. - Admin",
};

export default function RootAdminLayout({ children }) {

    return (
        <>
            <AdminLayout>
                {children}
            </AdminLayout>
        </>
    );
}
