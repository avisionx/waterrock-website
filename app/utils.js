export const getLocationSubmenu = (stayOptions) =>
    stayOptions.map(({ location, title, options }) => {
        if (options.length === 0) {
            return {
                title,
                href: "#",
            }
        }

        return {
            title,
            submenu: options.map(({ id, name }) => {
                const href = `/${location}/${id}`
                return {
                    title: name,
                    href,
                }
            }),
        }
    })
