export const authName = (identity) => {
    return (
    identity &&
    identity.user &&
    identity.user.user_metadata &&
    identity.user.user_metadata.full_name
    )  ;
}
