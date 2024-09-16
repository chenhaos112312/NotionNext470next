/**
 * 卡片组件
 * @param {*} param0
 * @returns
 */
const Card = (props) => {
  const { children, headerSlot, className } = props
  return <div className={className}>
        <>{headerSlot}</>
        {/* shadow px-2 py-4 bg-white dark:bg-hexo-black-gray hover:shadow-xl duration-200 --ed*/}
        <section className="shadow px-2 py-4 rounded-2xl bg28 hover:shadow-xl duration-200 mb-4">
            {children}
        </section>
    </div>
}
export default Card
