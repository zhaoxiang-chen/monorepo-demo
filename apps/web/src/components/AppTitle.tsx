type ApptitleProps = {
  subTitle: string
}

export function AppTitle({ subTitle }: ApptitleProps) {
  return (
    <section>
      <h1>monorepo-demo</h1>
      {subTitle ? <p>{subTitle}</p> : null}
    </section>
  )
}
