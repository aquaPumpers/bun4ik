---
title: Начиная
---

## Авторы постов

Авторы могут быть определены в сообщении блога с помощью свойства входной темы `authors` и должны иметь как минимум свойство `name` :

```yaml
authors:
  name: HiDeoo
  title: Starlight Aficionado
  picture: https://avatars.githubusercontent.com/u/494699
  url: https://hideoo.dev
```

Несколько авторов можно определить с помощью массива:

```yaml
authors:
  - name: HiDeoo
    title: Starlight Aficionado
    picture: https://avatars.githubusercontent.com/u/494699
    url: https://hideoo.dev
  - name: Ghost
    picture: https://avatars.githubusercontent.com/u/10137
    url: https://github.com/ghost
```

## Мировые авторы

Обычных авторов также можно определить глобально в конфигурации интеграции Starlight Blog:

```ts
starlightBlog({
  authors: {
    hideoo: {
      name: 'HiDeoo',
      title: 'Starlight Aficionado',
      picture: '/hideoo.png', // Images in the `public` directory are supported.
      url: 'https://hideoo.dev',
    },
  },
})
```

Если заголовок сообщения в блоге не определяет автора, вместо него будут использоваться глобальные авторы из конфигурации.

Заголовок сообщения в блоге также может ссылаться на глобального автора, используя ключ автора в конфигурации:

```yaml
authors:
  - hideoo # Will use the author defined in the configuration with the `hideoo` key.
  - name: Ghost
    picture: https://avatars.githubusercontent.com/u/10137
    url: https://github.com/ghost
```
