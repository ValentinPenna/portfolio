
export const prerender = false
export default function CreateProject(titleLabel: string, descriptionLabel: string, techsLabel: string, repoUrlLabel: string, deployUrlLabel: string) {
  return (
    <form>
      <label htmlFor="title">{titleLabel}</label>
      <input type="text" name="title" id="title" />
      <label htmlFor="description">{descriptionLabel}</label>
      <input type="text" name="description" id="description" />
      <label htmlFor="techs">{techsLabel}</label>
      <input type="text" name="techs" id="techs" />
      <label htmlFor="repoUrl">{repoUrlLabel}</label>
      <input type="text" name="repoUrl" id="repoUrl" />
      <label htmlFor="deployUrl">{deployUrlLabel}</label>
      <input type="text" name="deployUrl" id="deployUrl" />
    </form>
  )
}
