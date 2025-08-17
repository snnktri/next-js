export type PostContent = {
  images: string[];
  content: string;
  hashTags: string;
}

export type PostContentPartial = Partial<PostContent>;


export type EditorType = 'Opening' | 'Urgent' | 'Field_insight' | 'From_Scratch';

export const getDefaultPostContent = (type: EditorType | null): PostContentPartial => {
  switch (type) {
    case 'Opening':
      return {
        content: "<p>Welcome to the opening post!</p>",
        hashTags: "#welcome #opening",
        images: [],
      };
    case 'Urgent':
      return {
        content: "<p>This is an urgent announcement!</P>",
        hashTags: "#urgent #alert",
        images: [],
      };
    case 'Field_insight':
      return {
        content: "<p>Insights from the field.</p>",
        hashTags: "#insight #field",
        images: [],
      };
    case 'From_Scratch':
      return {
        content: "<p></p>",
        hashTags: "",
        images: [],
      };
    default:
      return {
        content: "<p></p>",
        hashTags: "",
        images: [],
      };
  }
};