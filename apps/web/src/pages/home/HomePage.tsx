import { Card, PageTitle } from "@monorepo-demo/ui"

export function HomePage() {
  return (
    <main>
      <PageTitle title="frontend-engineering-system" subTitle="工程管理实战" />

      <Card>
        <p className="text-sm leading-6 text-surface-900/70">这是首页，欢迎👏</p>
      </Card>
    </main>
  )
}
