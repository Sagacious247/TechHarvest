import AppError from "./AppError";

export function checkOwnership(
    ownerId: string,
    currentUserId: string,
    role: string
) {

    if (role === "super_admin") {
        return;
    }

    if (ownerId !== currentUserId) {
        throw new AppError(
            "You are not authorized.",
            403
        );
    }
}