
export const Routes = {
    // pages
    DashboardOverview: { path: "/" },
    Transactions: { path: "/transactions" },
    BootstrapTables: { path: "/tables/bootstrap-tables" },
    Billing: { path: "/examples/billing" },
    Invoice: { path: "/examples/invoice" },
    Signin: { path: "/sign-in" },
    VerifyEmail: { path: "/verify-email/:confirmationCode" },
    VerifyPassword: { path: "/verify-password/:confirmationCode" },
    Signup: { path: "/sign-up" },
    ForgotPassword: { path: "/forgot-password" },
    ResetPassword: { path: "/reset-password/:confirmationCode" },
    Lock: { path: "/lock" },
    NotFound: { path: "/examples/404" },
    PendingAccount: { path: "/pending-account" },


    // components
    Accordions: { path: "/components/accordions" },
    Alerts: { path: "/components/alerts" },
    Badges: { path: "/components/badges" },
    Widgets: { path: "/widgets" },
    Breadcrumbs: { path: "/components/breadcrumbs" },
    Buttons: { path: "/components/buttons" },
    Forms: { path: "/components/forms" },
    Modals: { path: "/components/modals" },
    Navs: { path: "/components/navs" },
    Navbars: { path: "/components/navbars" },
    Pagination: { path: "/components/pagination" },
    Popovers: { path: "/components/popovers" },
    Progress: { path: "/components/progress" },
    Tables: { path: "/components/tables" },
    Tabs: { path: "/components/tabs" },
    Tooltips: { path: "/components/tooltips" },
    Toasts: { path: "/components/toasts" },
    WidgetsComponent: { path: "/components/widgets" },
    Settings: { path: "/settings" },
    ChangePassword: { path: "/change-password" },
    // page - provide

    Blog: { path: "/blog" },
    BlogUser: { path: "/tin-tuc" },
    BlogAdd: { path: "/blog/add" },
    BlogDetail: { path: "/blog/detail" },
    BlogEdit: { path: "/blog/edit" },

    Video: { path: "/video" },
    VideoAdd: { path: "/video/add" },
    VideoDetail: { path: "/video/detail" },
    VideoEdit: { path: "/video/edit" },

    Order: { path: "/order" },
    OrderDetail: { path: "/order/detail" },
    OrderAdd: { path: "/order/add" },
    OrderUser: { path: "/order-user" },

    User: { path: "/user" },
    Feedback: { path: "/feedback" },
    FeedbackUser: { path: "/feedback-user" },

    Fee: { path: "/fee" },
};