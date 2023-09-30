import { Tooltip } from '@nextui-org/tooltip'

export default function TecnologiaCard({nombre, icon}) {
  return (
    <Tooltip
          key={nombre}
          placement="bottom"
          content={nombre}
          color="warning"
        >
            {icon}
        </Tooltip>
  )
}