"use strict";(self.webpackChunklogs=self.webpackChunklogs||[]).push([[4902],{4902:(e,t,n)=>{n.r(t),n.d(t,{conf:()=>a,language:()=>o});var i=n(89587),a={comments:{blockComment:["\x3c!--","--\x3e"]},brackets:[["<",">"]],autoClosingPairs:[{open:"<",close:">"},{open:"'",close:"'"},{open:'"',close:'"'}],surroundingPairs:[{open:"<",close:">"},{open:"'",close:"'"},{open:'"',close:'"'}],onEnterRules:[{beforeText:new RegExp("<([_:\\w][_:\\w-.\\d]*)([^/>]*(?!/)>)[^<]*$","i"),afterText:/^<\/([_:\w][_:\w-.\d]*)\s*>$/i,action:{indentAction:i.Mj.IndentAction.IndentOutdent}},{beforeText:new RegExp("<(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$","i"),action:{indentAction:i.Mj.IndentAction.Indent}}]},o={defaultToken:"",tokenPostfix:".xml",ignoreCase:!0,qualifiedName:/(?:[\w\.\-]+:)?[\w\.\-]+/,tokenizer:{root:[[/[^<&]+/,""],{include:"@whitespace"},[/(<)(@qualifiedName)/,[{token:"delimiter"},{token:"tag",next:"@tag"}]],[/(<\/)(@qualifiedName)(\s*)(>)/,[{token:"delimiter"},{token:"tag"},"",{token:"delimiter"}]],[/(<\?)(@qualifiedName)/,[{token:"delimiter"},{token:"metatag",next:"@tag"}]],[/(<\!)(@qualifiedName)/,[{token:"delimiter"},{token:"metatag",next:"@tag"}]],[/<\!\[CDATA\[/,{token:"delimiter.cdata",next:"@cdata"}],[/&\w+;/,"string.escape"]],cdata:[[/[^\]]+/,""],[/\]\]>/,{token:"delimiter.cdata",next:"@pop"}],[/\]/,""]],tag:[[/[ \t\r\n]+/,""],[/(@qualifiedName)(\s*=\s*)("[^"]*"|'[^']*')/,["attribute.name","","attribute.value"]],[/(@qualifiedName)(\s*=\s*)("[^">?\/]*|'[^'>?\/]*)(?=[\?\/]\>)/,["attribute.name","","attribute.value"]],[/(@qualifiedName)(\s*=\s*)("[^">]*|'[^'>]*)/,["attribute.name","","attribute.value"]],[/@qualifiedName/,"attribute.name"],[/\?>/,{token:"delimiter",next:"@pop"}],[/(\/)(>)/,[{token:"tag"},{token:"delimiter",next:"@pop"}]],[/>/,{token:"delimiter",next:"@pop"}]],whitespace:[[/[ \t\r\n]+/,""],[/<!--/,{token:"comment",next:"@comment"}]],comment:[[/[^<\-]+/,"comment.content"],[/-->/,{token:"comment",next:"@pop"}],[/<!--/,"comment.content.invalid"],[/[<\-]/,"comment.content"]]}}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDkwMi5idW5kbGUuanMiLCJtYXBwaW5ncyI6InFKQUtXQSxFQUFPLENBQ2RDLFNBQVUsQ0FDTkMsYUFBYyxDQUFDLFVBQVEsV0FFM0JDLFNBQVUsQ0FBQyxDQUFDLElBQUssTUFDakJDLGlCQUFrQixDQUNkLENBQUVDLEtBQU0sSUFBS0MsTUFBTyxLQUNwQixDQUFFRCxLQUFNLElBQUtDLE1BQU8sS0FDcEIsQ0FBRUQsS0FBTSxJQUFLQyxNQUFPLE1BRXhCQyxpQkFBa0IsQ0FDZCxDQUFFRixLQUFNLElBQUtDLE1BQU8sS0FDcEIsQ0FBRUQsS0FBTSxJQUFLQyxNQUFPLEtBQ3BCLENBQUVELEtBQU0sSUFBS0MsTUFBTyxNQUV4QkUsYUFBYyxDQUNWLENBQ0lDLFdBQVksSUFBSUMsT0FBTyw4Q0FBK0MsS0FDdEVDLFVBQVcsZ0NBQ1hDLE9BQVEsQ0FDSkMsYUFBYyxrQ0FHdEIsQ0FDSUosV0FBWSxJQUFJQyxPQUFPLHNDQUF1QyxLQUM5REUsT0FBUSxDQUFFQyxhQUFjLDZCQUl6QkMsRUFBVyxDQUNsQkMsYUFBYyxHQUNkQyxhQUFjLE9BQ2RDLFlBQVksRUFFWkMsY0FBZSwyQkFDZkMsVUFBVyxDQUNQQyxLQUFNLENBQ0YsQ0FBQyxTQUFVLElBQ1gsQ0FBRUMsUUFBUyxlQUVYLENBQUMsc0JBQXVCLENBQUMsQ0FBRUMsTUFBTyxhQUFlLENBQUVBLE1BQU8sTUFBT0MsS0FBTSxVQUV2RSxDQUNJLGdDQUNBLENBQUMsQ0FBRUQsTUFBTyxhQUFlLENBQUVBLE1BQU8sT0FBUyxHQUFJLENBQUVBLE1BQU8sZUFHNUQsQ0FBQyx3QkFBeUIsQ0FBQyxDQUFFQSxNQUFPLGFBQWUsQ0FBRUEsTUFBTyxVQUFXQyxLQUFNLFVBRTdFLENBQUMsd0JBQXlCLENBQUMsQ0FBRUQsTUFBTyxhQUFlLENBQUVBLE1BQU8sVUFBV0MsS0FBTSxVQUU3RSxDQUFDLGVBQWdCLENBQUVELE1BQU8sa0JBQW1CQyxLQUFNLFdBQ25ELENBQUMsUUFBUyxrQkFFZEMsTUFBTyxDQUNILENBQUMsU0FBVSxJQUNYLENBQUMsUUFBUyxDQUFFRixNQUFPLGtCQUFtQkMsS0FBTSxTQUM1QyxDQUFDLEtBQU0sS0FFWEUsSUFBSyxDQUNELENBQUMsYUFBYyxJQUNmLENBQ0ksNkNBQ0EsQ0FBQyxpQkFBa0IsR0FBSSxvQkFFM0IsQ0FDSSwrREFDQSxDQUFDLGlCQUFrQixHQUFJLG9CQUUzQixDQUNJLDZDQUNBLENBQUMsaUJBQWtCLEdBQUksb0JBRTNCLENBQUMsaUJBQWtCLGtCQUNuQixDQUFDLE1BQU8sQ0FBRUgsTUFBTyxZQUFhQyxLQUFNLFNBQ3BDLENBQUMsVUFBVyxDQUFDLENBQUVELE1BQU8sT0FBUyxDQUFFQSxNQUFPLFlBQWFDLEtBQU0sVUFDM0QsQ0FBQyxJQUFLLENBQUVELE1BQU8sWUFBYUMsS0FBTSxVQUV0Q0csV0FBWSxDQUNSLENBQUMsYUFBYyxJQUNmLENBQUMsT0FBUSxDQUFFSixNQUFPLFVBQVdDLEtBQU0sY0FFdkNJLFFBQVMsQ0FDTCxDQUFDLFVBQVcsbUJBQ1osQ0FBQyxNQUFPLENBQUVMLE1BQU8sVUFBV0MsS0FBTSxTQUNsQyxDQUFDLE9BQVEsMkJBQ1QsQ0FBQyxRQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbG9ncy8uL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9iYXNpYy1sYW5ndWFnZXMveG1sL3htbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmltcG9ydCB7IGxhbmd1YWdlcyB9IGZyb20gJy4uL2ZpbGxlcnMvbW9uYWNvLWVkaXRvci1jb3JlLmpzJztcbmV4cG9ydCB2YXIgY29uZiA9IHtcbiAgICBjb21tZW50czoge1xuICAgICAgICBibG9ja0NvbW1lbnQ6IFsnPCEtLScsICctLT4nXVxuICAgIH0sXG4gICAgYnJhY2tldHM6IFtbJzwnLCAnPiddXSxcbiAgICBhdXRvQ2xvc2luZ1BhaXJzOiBbXG4gICAgICAgIHsgb3BlbjogJzwnLCBjbG9zZTogJz4nIH0sXG4gICAgICAgIHsgb3BlbjogXCInXCIsIGNsb3NlOiBcIidcIiB9LFxuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInIH1cbiAgICBdLFxuICAgIHN1cnJvdW5kaW5nUGFpcnM6IFtcbiAgICAgICAgeyBvcGVuOiAnPCcsIGNsb3NlOiAnPicgfSxcbiAgICAgICAgeyBvcGVuOiBcIidcIiwgY2xvc2U6IFwiJ1wiIH0sXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicgfVxuICAgIF0sXG4gICAgb25FbnRlclJ1bGVzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGJlZm9yZVRleHQ6IG5ldyBSZWdFeHAoXCI8KFtfOlxcXFx3XVtfOlxcXFx3LS5cXFxcZF0qKShbXi8+XSooPyEvKT4pW148XSokXCIsICdpJyksXG4gICAgICAgICAgICBhZnRlclRleHQ6IC9ePFxcLyhbXzpcXHddW186XFx3LS5cXGRdKilcXHMqPiQvaSxcbiAgICAgICAgICAgIGFjdGlvbjoge1xuICAgICAgICAgICAgICAgIGluZGVudEFjdGlvbjogbGFuZ3VhZ2VzLkluZGVudEFjdGlvbi5JbmRlbnRPdXRkZW50XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGJlZm9yZVRleHQ6IG5ldyBSZWdFeHAoXCI8KFxcXFx3W1xcXFx3XFxcXGRdKikoW14vPl0qKD8hLyk+KVtePF0qJFwiLCAnaScpLFxuICAgICAgICAgICAgYWN0aW9uOiB7IGluZGVudEFjdGlvbjogbGFuZ3VhZ2VzLkluZGVudEFjdGlvbi5JbmRlbnQgfVxuICAgICAgICB9XG4gICAgXVxufTtcbmV4cG9ydCB2YXIgbGFuZ3VhZ2UgPSB7XG4gICAgZGVmYXVsdFRva2VuOiAnJyxcbiAgICB0b2tlblBvc3RmaXg6ICcueG1sJyxcbiAgICBpZ25vcmVDYXNlOiB0cnVlLFxuICAgIC8vIFVzZWZ1bCByZWd1bGFyIGV4cHJlc3Npb25zXG4gICAgcXVhbGlmaWVkTmFtZTogLyg/OltcXHdcXC5cXC1dKzopP1tcXHdcXC5cXC1dKy8sXG4gICAgdG9rZW5pemVyOiB7XG4gICAgICAgIHJvb3Q6IFtcbiAgICAgICAgICAgIFsvW148Jl0rLywgJyddLFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHdoaXRlc3BhY2UnIH0sXG4gICAgICAgICAgICAvLyBTdGFuZGFyZCBvcGVuaW5nIHRhZ1xuICAgICAgICAgICAgWy8oPCkoQHF1YWxpZmllZE5hbWUpLywgW3sgdG9rZW46ICdkZWxpbWl0ZXInIH0sIHsgdG9rZW46ICd0YWcnLCBuZXh0OiAnQHRhZycgfV1dLFxuICAgICAgICAgICAgLy8gU3RhbmRhcmQgY2xvc2luZyB0YWdcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvKDxcXC8pKEBxdWFsaWZpZWROYW1lKShcXHMqKSg+KS8sXG4gICAgICAgICAgICAgICAgW3sgdG9rZW46ICdkZWxpbWl0ZXInIH0sIHsgdG9rZW46ICd0YWcnIH0sICcnLCB7IHRva2VuOiAnZGVsaW1pdGVyJyB9XVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIC8vIE1ldGEgdGFncyAtIGluc3RydWN0aW9uXG4gICAgICAgICAgICBbLyg8XFw/KShAcXVhbGlmaWVkTmFtZSkvLCBbeyB0b2tlbjogJ2RlbGltaXRlcicgfSwgeyB0b2tlbjogJ21ldGF0YWcnLCBuZXh0OiAnQHRhZycgfV1dLFxuICAgICAgICAgICAgLy8gTWV0YSB0YWdzIC0gZGVjbGFyYXRpb25cbiAgICAgICAgICAgIFsvKDxcXCEpKEBxdWFsaWZpZWROYW1lKS8sIFt7IHRva2VuOiAnZGVsaW1pdGVyJyB9LCB7IHRva2VuOiAnbWV0YXRhZycsIG5leHQ6ICdAdGFnJyB9XV0sXG4gICAgICAgICAgICAvLyBDREFUQVxuICAgICAgICAgICAgWy88XFwhXFxbQ0RBVEFcXFsvLCB7IHRva2VuOiAnZGVsaW1pdGVyLmNkYXRhJywgbmV4dDogJ0BjZGF0YScgfV0sXG4gICAgICAgICAgICBbLyZcXHcrOy8sICdzdHJpbmcuZXNjYXBlJ11cbiAgICAgICAgXSxcbiAgICAgICAgY2RhdGE6IFtcbiAgICAgICAgICAgIFsvW15cXF1dKy8sICcnXSxcbiAgICAgICAgICAgIFsvXFxdXFxdPi8sIHsgdG9rZW46ICdkZWxpbWl0ZXIuY2RhdGEnLCBuZXh0OiAnQHBvcCcgfV0sXG4gICAgICAgICAgICBbL1xcXS8sICcnXVxuICAgICAgICBdLFxuICAgICAgICB0YWc6IFtcbiAgICAgICAgICAgIFsvWyBcXHRcXHJcXG5dKy8sICcnXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvKEBxdWFsaWZpZWROYW1lKShcXHMqPVxccyopKFwiW15cIl0qXCJ8J1teJ10qJykvLFxuICAgICAgICAgICAgICAgIFsnYXR0cmlidXRlLm5hbWUnLCAnJywgJ2F0dHJpYnV0ZS52YWx1ZSddXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC8oQHF1YWxpZmllZE5hbWUpKFxccyo9XFxzKikoXCJbXlwiPj9cXC9dKnwnW14nPj9cXC9dKikoPz1bXFw/XFwvXVxcPikvLFxuICAgICAgICAgICAgICAgIFsnYXR0cmlidXRlLm5hbWUnLCAnJywgJ2F0dHJpYnV0ZS52YWx1ZSddXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC8oQHF1YWxpZmllZE5hbWUpKFxccyo9XFxzKikoXCJbXlwiPl0qfCdbXic+XSopLyxcbiAgICAgICAgICAgICAgICBbJ2F0dHJpYnV0ZS5uYW1lJywgJycsICdhdHRyaWJ1dGUudmFsdWUnXVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFsvQHF1YWxpZmllZE5hbWUvLCAnYXR0cmlidXRlLm5hbWUnXSxcbiAgICAgICAgICAgIFsvXFw/Pi8sIHsgdG9rZW46ICdkZWxpbWl0ZXInLCBuZXh0OiAnQHBvcCcgfV0sXG4gICAgICAgICAgICBbLyhcXC8pKD4pLywgW3sgdG9rZW46ICd0YWcnIH0sIHsgdG9rZW46ICdkZWxpbWl0ZXInLCBuZXh0OiAnQHBvcCcgfV1dLFxuICAgICAgICAgICAgWy8+LywgeyB0b2tlbjogJ2RlbGltaXRlcicsIG5leHQ6ICdAcG9wJyB9XVxuICAgICAgICBdLFxuICAgICAgICB3aGl0ZXNwYWNlOiBbXG4gICAgICAgICAgICBbL1sgXFx0XFxyXFxuXSsvLCAnJ10sXG4gICAgICAgICAgICBbLzwhLS0vLCB7IHRva2VuOiAnY29tbWVudCcsIG5leHQ6ICdAY29tbWVudCcgfV1cbiAgICAgICAgXSxcbiAgICAgICAgY29tbWVudDogW1xuICAgICAgICAgICAgWy9bXjxcXC1dKy8sICdjb21tZW50LmNvbnRlbnQnXSxcbiAgICAgICAgICAgIFsvLS0+LywgeyB0b2tlbjogJ2NvbW1lbnQnLCBuZXh0OiAnQHBvcCcgfV0sXG4gICAgICAgICAgICBbLzwhLS0vLCAnY29tbWVudC5jb250ZW50LmludmFsaWQnXSxcbiAgICAgICAgICAgIFsvWzxcXC1dLywgJ2NvbW1lbnQuY29udGVudCddXG4gICAgICAgIF1cbiAgICB9XG59O1xuIl0sIm5hbWVzIjpbImNvbmYiLCJjb21tZW50cyIsImJsb2NrQ29tbWVudCIsImJyYWNrZXRzIiwiYXV0b0Nsb3NpbmdQYWlycyIsIm9wZW4iLCJjbG9zZSIsInN1cnJvdW5kaW5nUGFpcnMiLCJvbkVudGVyUnVsZXMiLCJiZWZvcmVUZXh0IiwiUmVnRXhwIiwiYWZ0ZXJUZXh0IiwiYWN0aW9uIiwiaW5kZW50QWN0aW9uIiwibGFuZ3VhZ2UiLCJkZWZhdWx0VG9rZW4iLCJ0b2tlblBvc3RmaXgiLCJpZ25vcmVDYXNlIiwicXVhbGlmaWVkTmFtZSIsInRva2VuaXplciIsInJvb3QiLCJpbmNsdWRlIiwidG9rZW4iLCJuZXh0IiwiY2RhdGEiLCJ0YWciLCJ3aGl0ZXNwYWNlIiwiY29tbWVudCJdLCJzb3VyY2VSb290IjoiIn0=