import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Text, Spacer } from '@nextui-org/react'

export default function Home() {
  return (
    <>
      <Text h2>The feature of articles sharing </Text>
      <Spacer y={1} />
      <Text size="$lg">ShareArticles allow you to create and share articles</Text>
    </>
  )
}
