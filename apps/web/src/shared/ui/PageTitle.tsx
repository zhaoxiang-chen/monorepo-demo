type PageTitleProps = {
  title: string
  subTitle: string
}

export function PageTitle({ title, subTitle }: PageTitleProps) {
  return (
    <section>
      <h1>{title}</h1>
      {subTitle ? <p>{subTitle}</p> : null}
    </section>
  )
}
