export default function ({ store, redirect }) {
    let login_status = store.state.user.is_login;

    if (login_status == 0) {
        return redirect('/login')
    }
}