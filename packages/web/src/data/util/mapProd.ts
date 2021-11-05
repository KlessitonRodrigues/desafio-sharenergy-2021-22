import { Production } from '../types/powerplant'

const localeDate = (date: string) =>
  new Date(date).toLocaleDateString('pt-br', {
    day: '2-digit',
    month: '2-digit'
  })

export default function mapProduction(prodArr: Production[]) {
  return prodArr.map((prod) => ({
    day: localeDate(prod.date),
    ...prod.production
  }))
}
