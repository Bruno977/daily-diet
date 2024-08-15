export type dataStorageProps = {
  title: string,
  data: {
    id: string,
    hour: string,
    title: string,
    inDiet: boolean,
    description: string,
  }[],
}