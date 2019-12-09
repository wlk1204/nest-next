import React from 'react'
import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR: any = dynamic(
  () => import('./omim-button'),
  { ssr: false },
)

export default class Index extends React.Component {

  render() {
    return (
      <div>
        <DynamicComponentWithNoSSR />
      </div >
    )
  }
}
