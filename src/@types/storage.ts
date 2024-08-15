export type DataStorageItemProps = {
    id: string,
    hour: string,
    title: string,
    inDiet: boolean,
    description: string,
}

export type DataStorageProps = {
  title: string,
  data: DataStorageItemProps[],
}