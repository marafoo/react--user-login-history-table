
export interface ItemsProps {
  where: string;
  ip: string;
  local: string;
}

export function Items({where, ip, local}: ItemsProps) {
  return (
    <tr>
      <td>{where}</td>
      <td>{ip}</td>
      <td>{local}</td>
    </tr>
  )
}