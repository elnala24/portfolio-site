# Portfolio Infrastructure (AWS CDK)

Infrastructure as Code for deploying the portfolio site on AWS Amplify.

## Architecture

- **AWS Amplify** - Hosting and CI/CD
- **AWS Secrets Manager** - Secure GitHub token storage
- **AWS CDK** - Infrastructure as Code (TypeScript)

## Stack Resources

- Amplify App connected to GitHub repo
- Auto-build on push to main branch
- Production deployment stage

## Prerequisites

- AWS CLI configured
- Node.js installed
- GitHub personal access token stored in Secrets Manager as `github-token-amplify`

## Deploy
```bash
npm install
cdk bootstrap  # One-time setup
cdk deploy
```

## Useful Commands

- `cdk deploy` - Deploy stack to AWS
- `cdk diff` - Compare deployed stack with current state
- `cdk synth` - Output CloudFormation template