export const groupByTheme = (items, locale, prefix) => {
  const _items = items.map((item) => ({
    ...item,
    path: item.path.replace(`/${locale}`, ''),
    theme: item.dir.replace(`/${prefix}/`, ''),
  }))

  const themes = _items.reduce(
    (result, item) =>
      result.includes(item.theme) ? result : [...result, item.theme],
    []
  )

  const categories = themes.reduce((result, theme) => {
    const meta = _items.find(
      (item) => item.theme === theme && item.slug === 'meta'
    )
    return meta
      ? [
          ...result,
          {
            theme,
            title: meta.title,
            position: meta.position,
            description: meta.description,
            illustration: meta.illustration,
            items: _items.filter(
              (item) => item.theme === theme && item.slug !== 'meta'
            ),
            // .sort((a, b) => a.position > b.position),
          },
        ]
      : result
  }, [])
  return categories.sort((a, b) => a.position > b.position)
}
