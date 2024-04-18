export default {
    chat: [
        {
            name: 'awsChatBedrock',
            models: [
                {
                    label: 'anthropic.claude-3-haiku',
                    name: 'anthropic.claude-3-haiku-20240307-v1:0'
                },
                {
                    label: 'anthropic.claude-3-sonnet',
                    name: 'anthropic.claude-3-sonnet-20240229-v1:0'
                },
                {
                    label: 'anthropic.claude-instant-v1',
                    name: 'anthropic.claude-instant-v1'
                },
                {
                    label: 'anthropic.claude-v2:1',
                    name: 'anthropic.claude-v2:1'
                },
                {
                    label: 'anthropic.claude-v2',
                    name: 'anthropic.claude-v2'
                },
                {
                    label: 'meta.llama2-13b-chat-v1',
                    name: 'meta.llama2-13b-chat-v1'
                },
                {
                    label: 'meta.llama2-70b-chat-v1',
                    name: 'meta.llama2-70b-chat-v1'
                },
                {
                    label: 'mistral.mistral-7b-instruct-v0:2',
                    name: 'mistral.mistral-7b-instruct-v0:2'
                },
                {
                    label: 'mistral.mixtral-8x7b-instruct-v0:1',
                    name: 'mistral.mixtral-8x7b-instruct-v0:1'
                }
            ],
            regions: [
                {
                    label: 'af-south-1',
                    name: 'af-south-1'
                },
                {
                    label: 'ap-east-1',
                    name: 'ap-east-1'
                },
                {
                    label: 'ap-northeast-1',
                    name: 'ap-northeast-1'
                },
                {
                    label: 'ap-northeast-2',
                    name: 'ap-northeast-2'
                },
                {
                    label: 'ap-northeast-3',
                    name: 'ap-northeast-3'
                },
                {
                    label: 'ap-south-1',
                    name: 'ap-south-1'
                },
                {
                    label: 'ap-south-2',
                    name: 'ap-south-2'
                },
                {
                    label: 'ap-southeast-1',
                    name: 'ap-southeast-1'
                },
                {
                    label: 'ap-southeast-2',
                    name: 'ap-southeast-2'
                },
                {
                    label: 'ap-southeast-3',
                    name: 'ap-southeast-3'
                },
                {
                    label: 'ap-southeast-4',
                    name: 'ap-southeast-4'
                },
                {
                    label: 'ap-southeast-5',
                    name: 'ap-southeast-5'
                },
                {
                    label: 'ap-southeast-6',
                    name: 'ap-southeast-6'
                },
                {
                    label: 'ca-central-1',
                    name: 'ca-central-1'
                },
                {
                    label: 'ca-west-1',
                    name: 'ca-west-1'
                },
                {
                    label: 'cn-north-1',
                    name: 'cn-north-1'
                },
                {
                    label: 'cn-northwest-1',
                    name: 'cn-northwest-1'
                },
                {
                    label: 'eu-central-1',
                    name: 'eu-central-1'
                },
                {
                    label: 'eu-central-2',
                    name: 'eu-central-2'
                },
                {
                    label: 'eu-north-1',
                    name: 'eu-north-1'
                },
                {
                    label: 'eu-south-1',
                    name: 'eu-south-1'
                },
                {
                    label: 'eu-south-2',
                    name: 'eu-south-2'
                },
                {
                    label: 'eu-west-1',
                    name: 'eu-west-1'
                },
                {
                    label: 'eu-west-2',
                    name: 'eu-west-2'
                },
                {
                    label: 'eu-west-3',
                    name: 'eu-west-3'
                },
                {
                    label: 'il-central-1',
                    name: 'il-central-1'
                },
                {
                    label: 'me-central-1',
                    name: 'me-central-1'
                },
                {
                    label: 'me-south-1',
                    name: 'me-south-1'
                },
                {
                    label: 'sa-east-1',
                    name: 'sa-east-1'
                },
                {
                    label: 'us-east-1',
                    name: 'us-east-1'
                },
                {
                    label: 'us-east-2',
                    name: 'us-east-2'
                },
                {
                    label: 'us-gov-east-1',
                    name: 'us-gov-east-1'
                },
                {
                    label: 'us-gov-west-1',
                    name: 'us-gov-west-1'
                },
                {
                    label: 'us-west-1',
                    name: 'us-west-1'
                },
                {
                    label: 'us-west-2',
                    name: 'us-west-2'
                }
            ]
        },
        {
            name: 'azureChatOpenAI',
            models: [
                {
                    label: 'gpt-4',
                    name: 'gpt-4'
                },
                {
                    label: 'gpt-4-32k',
                    name: 'gpt-4-32k'
                },
                {
                    label: 'gpt-35-turbo',
                    name: 'gpt-35-turbo'
                },
                {
                    label: 'gpt-35-turbo-16k',
                    name: 'gpt-35-turbo-16k'
                },
                {
                    label: 'gpt-4-vision-preview',
                    name: 'gpt-4-vision-preview'
                }
            ]
        },
        {
            name: 'azureChatOpenAI_LlamaIndex',
            models: [
                {
                    label: 'gpt-4',
                    name: 'gpt-4'
                },
                {
                    label: 'gpt-4-32k',
                    name: 'gpt-4-32k'
                },
                {
                    label: 'gpt-35-turbo',
                    name: 'gpt-35-turbo'
                },
                {
                    label: 'gpt-35-turbo-16k',
                    name: 'gpt-35-turbo-16k'
                },
                {
                    label: 'gpt-4-vision-preview',
                    name: 'gpt-4-vision-preview'
                }
            ]
        },
        {
            name: 'chatAnthropic',
            models: [
                {
                    label: 'claude-3-haiku',
                    name: 'claude-3-haiku-20240307',
                    description: 'Fastest and most compact model, designed for near-instant responsiveness'
                },
                {
                    label: 'claude-3-opus',
                    name: 'claude-3-opus-20240229',
                    description: 'Most powerful model for highly complex tasks'
                },
                {
                    label: 'claude-3-sonnet',
                    name: 'claude-3-sonnet-20240229',
                    description: 'Ideal balance of intelligence and speed for enterprise workloads'
                },
                {
                    label: 'claude-2.0 (legacy)',
                    name: 'claude-2.0',
                    description: 'Claude 2 latest major version, automatically get updates to the model as they are released'
                },
                {
                    label: 'claude-2.1 (legacy)',
                    name: 'claude-2.1',
                    description: 'Claude 2 latest full version'
                },
                {
                    label: 'claude-instant-1.2 (legacy)',
                    name: 'claude-instant-1.2',
                    description: 'Claude Instant latest major version, automatically get updates to the model as they are released'
                }
            ]
        },
        {
            name: 'chatAnthropic_LlamaIndex',
            models: [
                {
                    label: 'claude-3-haiku',
                    name: 'claude-3-haiku',
                    description: 'Fastest and most compact model, designed for near-instant responsiveness'
                },
                {
                    label: 'claude-3-opus',
                    name: 'claude-3-opus',
                    description: 'Most powerful model for highly complex tasks'
                },
                {
                    label: 'claude-3-sonnet',
                    name: 'claude-3-sonnet',
                    description: 'Ideal balance of intelligence and speed for enterprise workloads'
                },
                {
                    label: 'claude-2.1 (legacy)',
                    name: 'claude-2.1',
                    description: 'Claude 2 latest major version, automatically get updates to the model as they are released'
                },
                {
                    label: 'claude-instant-1.2 (legacy)',
                    name: 'claude-instant-1.2',
                    description: 'Claude Instant latest major version, automatically get updates to the model as they are released'
                }
            ]
        },
        {
            name: 'chatGoogleGenerativeAI',
            models: [
                {
                    label: 'gemini-1.5-pro-latest',
                    name: 'gemini-1.5-pro-latest'
                },
                {
                    label: 'gemini-pro',
                    name: 'gemini-pro'
                }
            ]
        },
        {
            name: 'chatGooglePaLM',
            models: [
                {
                    label: 'models/chat-bison-001',
                    name: 'models/chat-bison-001'
                }
            ]
        },
        {
            name: 'chatGoogleVertexAI',
            models: [
                {
                    label: 'chat-bison',
                    name: 'chat-bison'
                },
                {
                    label: 'codechat-bison',
                    name: 'codechat-bison'
                },
                {
                    label: 'chat-bison-32k',
                    name: 'chat-bison-32k'
                },
                {
                    label: 'codechat-bison-32k',
                    name: 'codechat-bison-32k'
                }
            ]
        },
        {
            name: 'chatCohere',
            models: [
                {
                    label: 'command-r',
                    name: 'command-r'
                },
                {
                    label: 'command-r-plus',
                    name: 'command-r-plus'
                }
            ]
        },
        {
            name: 'chatOpenAI',
            models: [
                {
                    label: 'gpt-4',
                    name: 'gpt-4'
                },
                {
                    label: 'gpt-4-turbo',
                    name: 'gpt-4-turbo'
                },
                {
                    label: 'gpt-4-turbo-preview',
                    name: 'gpt-4-turbo-preview'
                },
                {
                    label: 'gpt-4-0125-preview',
                    name: 'gpt-4-0125-preview'
                },
                {
                    label: 'gpt-4-1106-preview',
                    name: 'gpt-4-1106-preview'
                },
                {
                    label: 'gpt-4-1106-vision-preview',
                    name: 'gpt-4-1106-vision-preview'
                },
                {
                    label: 'gpt-4-vision-preview',
                    name: 'gpt-4-vision-preview'
                },
                {
                    label: 'gpt-4-0613',
                    name: 'gpt-4-0613'
                },
                {
                    label: 'gpt-4-32k',
                    name: 'gpt-4-32k'
                },
                {
                    label: 'gpt-4-32k-0613',
                    name: 'gpt-4-32k-0613'
                },
                {
                    label: 'gpt-3.5-turbo',
                    name: 'gpt-3.5-turbo'
                },
                {
                    label: 'gpt-3.5-turbo-0125',
                    name: 'gpt-3.5-turbo-0125'
                },
                {
                    label: 'gpt-3.5-turbo-1106',
                    name: 'gpt-3.5-turbo-1106'
                },
                {
                    label: 'gpt-3.5-turbo-0613',
                    name: 'gpt-3.5-turbo-0613'
                },
                {
                    label: 'gpt-3.5-turbo-16k',
                    name: 'gpt-3.5-turbo-16k'
                },
                {
                    label: 'gpt-3.5-turbo-16k-0613',
                    name: 'gpt-3.5-turbo-16k-0613'
                },
                {
                    label: 'glm-4',
                    name: 'glm-4'
                },
                {
                    label: 'glm-3-turbo',
                    name: 'glm-3-turbo'
                }
            ]
        },
        {
            name: 'chatOpenAI_LlamaIndex',
            models: [
                {
                    label: 'gpt-4',
                    name: 'gpt-4'
                },
                {
                    label: 'gpt-4-turbo',
                    name: 'gpt-4-turbo'
                },
                {
                    label: 'gpt-4-turbo-preview',
                    name: 'gpt-4-turbo-preview'
                },
                {
                    label: 'gpt-4-0125-preview',
                    name: 'gpt-4-0125-preview'
                },
                {
                    label: 'gpt-4-1106-preview',
                    name: 'gpt-4-1106-preview'
                },
                {
                    label: 'gpt-4-vision-preview',
                    name: 'gpt-4-vision-preview'
                },
                {
                    label: 'gpt-4-0613',
                    name: 'gpt-4-0613'
                },
                {
                    label: 'gpt-4-32k',
                    name: 'gpt-4-32k'
                },
                {
                    label: 'gpt-4-32k-0613',
                    name: 'gpt-4-32k-0613'
                },
                {
                    label: 'gpt-3.5-turbo',
                    name: 'gpt-3.5-turbo'
                },
                {
                    label: 'gpt-3.5-turbo-1106',
                    name: 'gpt-3.5-turbo-1106'
                },
                {
                    label: 'gpt-3.5-turbo-0613',
                    name: 'gpt-3.5-turbo-0613'
                },
                {
                    label: 'gpt-3.5-turbo-16k',
                    name: 'gpt-3.5-turbo-16k'
                },
                {
                    label: 'gpt-3.5-turbo-16k-0613',
                    name: 'gpt-3.5-turbo-16k-0613'
                }
            ]
        },
        {
            name: 'chatMistralAI',
            models: [
                {
                    label: 'open-mistral-7b',
                    name: 'open-mistral-7b'
                },
                {
                    label: 'mistral-tiny-2312',
                    name: 'mistral-tiny-2312'
                },
                {
                    label: 'mistral-tiny',
                    name: 'mistral-tiny'
                },
                {
                    label: 'open-mixtral-8x7b',
                    name: 'open-mixtral-8x7b'
                },
                {
                    label: 'mistral-small-2312',
                    name: 'mistral-small-2312'
                },
                {
                    label: 'mistral-small',
                    name: 'mistral-small'
                },
                {
                    label: 'mistral-small-2402',
                    name: 'mistral-small-2402'
                },
                {
                    label: 'mistral-small-latest',
                    name: 'mistral-small-latest'
                },
                {
                    label: 'mistral-medium-latest',
                    name: 'mistral-medium-latest'
                },
                {
                    label: 'mistral-medium-2312',
                    name: 'mistral-medium-2312'
                },
                {
                    label: 'mistral-medium',
                    name: 'mistral-medium'
                },
                {
                    label: 'mistral-large-latest',
                    name: 'mistral-large-latest'
                },
                {
                    label: 'mistral-large-2402',
                    name: 'mistral-large-2402'
                }
            ]
        }
    ],
    llm: [
        {
            name: 'awsBedrock',
            models: [
                {
                    label: 'amazon.titan-tg1-large',
                    name: 'amazon.titan-tg1-large'
                },
                {
                    label: 'amazon.titan-e1t-medium',
                    name: 'amazon.titan-e1t-medium'
                },
                {
                    label: 'cohere.command-text-v14',
                    name: 'cohere.command-text-v14'
                },
                {
                    label: 'cohere.command-light-text-v14',
                    name: 'cohere.command-light-text-v14'
                },
                {
                    label: 'ai21.j2-grande-instruct',
                    name: 'ai21.j2-grande-instruct'
                },
                {
                    label: 'ai21.j2-jumbo-instruct',
                    name: 'ai21.j2-jumbo-instruct'
                },
                {
                    label: 'ai21.j2-mid',
                    name: 'ai21.j2-mid'
                },
                {
                    label: 'ai21.j2-ultra',
                    name: 'ai21.j2-ultra'
                }
            ],
            regions: [
                {
                    label: 'af-south-1',
                    name: 'af-south-1'
                },
                {
                    label: 'ap-east-1',
                    name: 'ap-east-1'
                },
                {
                    label: 'ap-northeast-1',
                    name: 'ap-northeast-1'
                },
                {
                    label: 'ap-northeast-2',
                    name: 'ap-northeast-2'
                },
                {
                    label: 'ap-northeast-3',
                    name: 'ap-northeast-3'
                },
                {
                    label: 'ap-south-1',
                    name: 'ap-south-1'
                },
                {
                    label: 'ap-south-2',
                    name: 'ap-south-2'
                },
                {
                    label: 'ap-southeast-1',
                    name: 'ap-southeast-1'
                },
                {
                    label: 'ap-southeast-2',
                    name: 'ap-southeast-2'
                },
                {
                    label: 'ap-southeast-3',
                    name: 'ap-southeast-3'
                },
                {
                    label: 'ap-southeast-4',
                    name: 'ap-southeast-4'
                },
                {
                    label: 'ap-southeast-5',
                    name: 'ap-southeast-5'
                },
                {
                    label: 'ap-southeast-6',
                    name: 'ap-southeast-6'
                },
                {
                    label: 'ca-central-1',
                    name: 'ca-central-1'
                },
                {
                    label: 'ca-west-1',
                    name: 'ca-west-1'
                },
                {
                    label: 'cn-north-1',
                    name: 'cn-north-1'
                },
                {
                    label: 'cn-northwest-1',
                    name: 'cn-northwest-1'
                },
                {
                    label: 'eu-central-1',
                    name: 'eu-central-1'
                },
                {
                    label: 'eu-central-2',
                    name: 'eu-central-2'
                },
                {
                    label: 'eu-north-1',
                    name: 'eu-north-1'
                },
                {
                    label: 'eu-south-1',
                    name: 'eu-south-1'
                },
                {
                    label: 'eu-south-2',
                    name: 'eu-south-2'
                },
                {
                    label: 'eu-west-1',
                    name: 'eu-west-1'
                },
                {
                    label: 'eu-west-2',
                    name: 'eu-west-2'
                },
                {
                    label: 'eu-west-3',
                    name: 'eu-west-3'
                },
                {
                    label: 'il-central-1',
                    name: 'il-central-1'
                },
                {
                    label: 'me-central-1',
                    name: 'me-central-1'
                },
                {
                    label: 'me-south-1',
                    name: 'me-south-1'
                },
                {
                    label: 'sa-east-1',
                    name: 'sa-east-1'
                },
                {
                    label: 'us-east-1',
                    name: 'us-east-1'
                },
                {
                    label: 'us-east-2',
                    name: 'us-east-2'
                },
                {
                    label: 'us-gov-east-1',
                    name: 'us-gov-east-1'
                },
                {
                    label: 'us-gov-west-1',
                    name: 'us-gov-west-1'
                },
                {
                    label: 'us-west-1',
                    name: 'us-west-1'
                },
                {
                    label: 'us-west-2',
                    name: 'us-west-2'
                }
            ]
        },
        {
            name: 'azureOpenAI',
            models: [
                {
                    label: 'text-davinci-003',
                    name: 'text-davinci-003'
                },
                {
                    label: 'ada',
                    name: 'ada'
                },
                {
                    label: 'text-ada-001',
                    name: 'text-ada-001'
                },
                {
                    label: 'babbage',
                    name: 'babbage'
                },
                {
                    label: 'text-babbage-001',
                    name: 'text-babbage-001'
                },
                {
                    label: 'curie',
                    name: 'curie'
                },
                {
                    label: 'text-curie-001',
                    name: 'text-curie-001'
                },
                {
                    label: 'davinci',
                    name: 'davinci'
                },
                {
                    label: 'text-davinci-001',
                    name: 'text-davinci-001'
                },
                {
                    label: 'text-davinci-002',
                    name: 'text-davinci-002'
                },
                {
                    label: 'text-davinci-fine-tune-002',
                    name: 'text-davinci-fine-tune-002'
                },
                {
                    label: 'gpt-35-turbo',
                    name: 'gpt-35-turbo'
                },
                {
                    label: 'gpt-4',
                    name: 'gpt-4'
                },
                {
                    label: 'gpt-4-32k',
                    name: 'gpt-4-32k'
                }
            ]
        },
        {
            name: 'cohere',
            models: [
                {
                    label: 'command',
                    name: 'command'
                },
                {
                    label: 'command-light',
                    name: 'command-light'
                },
                {
                    label: 'command-nightly',
                    name: 'command-nightly'
                },
                {
                    label: 'command-light-nightly',
                    name: 'command-light-nightly'
                },
                {
                    label: 'base',
                    name: 'base'
                },
                {
                    label: 'base-light',
                    name: 'base-light'
                }
            ]
        },
        {
            name: 'GooglePaLM',
            models: [
                {
                    label: 'models/text-bison-001',
                    name: 'models/text-bison-001'
                }
            ]
        },
        {
            name: 'googlevertexai',
            models: [
                {
                    label: 'text-bison',
                    name: 'text-bison'
                },
                {
                    label: 'code-bison',
                    name: 'code-bison'
                },
                {
                    label: 'code-gecko',
                    name: 'code-gecko'
                },
                {
                    label: 'text-bison-32k',
                    name: 'text-bison-32k'
                },
                {
                    label: 'code-bison-32k',
                    name: 'code-bison-32k'
                },
                {
                    label: 'code-gecko-32k',
                    name: 'code-gecko-32k'
                }
            ]
        },
        {
            name: 'openAI',
            models: [
                {
                    label: 'gpt-3.5-turbo-instruct',
                    name: 'gpt-3.5-turbo-instruct'
                },
                {
                    label: 'babbage-002',
                    name: 'babbage-002'
                },
                {
                    label: 'davinci-002',
                    name: 'davinci-002'
                }
            ]
        }
    ],
    embedding: [
        {
            name: 'openAIEmbeddings',
            models: [
                {
                    label: 'text-embedding-3-large',
                    name: 'text-embedding-3-large'
                },
                {
                    label: 'text-embedding-3-small',
                    name: 'text-embedding-3-small'
                },
                {
                    label: 'text-embedding-ada-002',
                    name: 'text-embedding-ada-002'
                }
            ]
        },
        {
            name: 'openAIEmbedding_LlamaIndex',
            models: [
                {
                    label: 'text-embedding-3-large',
                    name: 'text-embedding-3-large'
                },
                {
                    label: 'text-embedding-3-small',
                    name: 'text-embedding-3-small'
                },
                {
                    label: 'text-embedding-ada-002',
                    name: 'text-embedding-ada-002'
                }
            ]
        },
        {
            name: 'mistralAIEmbeddings',
            models: [
                {
                    label: 'mistral-embed',
                    name: 'mistral-embed'
                }
            ]
        },
        {
            name: 'voyageAIEmbeddings',
            models: [
                {
                    label: 'voyage-2',
                    name: 'voyage-2',
                    description: 'Base generalist embedding model optimized for both latency and quality'
                },
                {
                    label: 'voyage-code-2',
                    name: 'voyage-code-2',
                    description: 'Optimized for code retrieval'
                },
                {
                    label: 'voyage-large-2',
                    name: 'voyage-large-2',
                    description: 'Powerful generalist embedding model'
                },
                {
                    label: 'voyage-lite-02-instruct',
                    name: 'voyage-lite-02-instruct',
                    description: 'Instruction-tuned for classification, clustering, and sentence textual similarity tasks'
                }
            ]
        },
        {
            name: 'googlePaLMEmbeddings',
            models: [
                {
                    label: 'models/embedding-gecko-001',
                    name: 'models/embedding-gecko-001'
                }
            ]
        },
        {
            name: 'googlevertexaiEmbeddings',
            models: [
                {
                    label: 'textembedding-gecko@001',
                    name: 'textembedding-gecko@001'
                },
                {
                    label: 'textembedding-gecko@latest',
                    name: 'textembedding-gecko@latest'
                },
                {
                    label: 'textembedding-gecko-multilingual@latest',
                    name: 'textembedding-gecko-multilingual@latest'
                }
            ]
        },
        {
            name: 'googleGenerativeAiEmbeddings',
            models: [
                {
                    label: 'embedding-001',
                    name: 'embedding-001'
                },
                {
                    label: 'text-embedding-004',
                    name: 'text-embedding-004'
                }
            ]
        },
        {
            name: 'cohereEmbeddings',
            models: [
                {
                    label: 'embed-english-v3.0',
                    name: 'embed-english-v3.0',
                    description: 'Embedding Dimensions: 1024'
                },
                {
                    label: 'embed-english-light-v3.0',
                    name: 'embed-english-light-v3.0',
                    description: 'Embedding Dimensions: 384'
                },
                {
                    label: 'embed-multilingual-v3.0',
                    name: 'embed-multilingual-v3.0',
                    description: 'Embedding Dimensions: 1024'
                },
                {
                    label: 'embed-multilingual-light-v3.0',
                    name: 'embed-multilingual-light-v3.0',
                    description: 'Embedding Dimensions: 384'
                },
                {
                    label: 'embed-english-v2.0',
                    name: 'embed-english-v2.0',
                    description: 'Embedding Dimensions: 4096'
                },
                {
                    label: 'embed-english-light-v2.0',
                    name: 'embed-english-light-v2.0',
                    description: 'Embedding Dimensions: 1024'
                },
                {
                    label: 'embed-multilingual-v2.0',
                    name: 'embed-multilingual-v2.0',
                    description: 'Embedding Dimensions: 768'
                }
            ]
        },
        {
            name: 'AWSBedrockEmbeddings',
            models: [
                {
                    label: 'amazon.titan-embed-text-v1',
                    name: 'amazon.titan-embed-text-v1'
                },
                {
                    label: 'amazon.titan-embed-g1-text-02',
                    name: 'amazon.titan-embed-g1-text-02'
                },
                {
                    label: 'cohere.embed-english-v3',
                    name: 'cohere.embed-english-v3'
                },
                {
                    label: 'cohere.embed-multilingual-v3',
                    name: 'cohere.embed-multilingual-v3'
                }
            ],
            regions: [
                {
                    label: 'af-south-1',
                    name: 'af-south-1'
                },
                {
                    label: 'ap-east-1',
                    name: 'ap-east-1'
                },
                {
                    label: 'ap-northeast-1',
                    name: 'ap-northeast-1'
                },
                {
                    label: 'ap-northeast-2',
                    name: 'ap-northeast-2'
                },
                {
                    label: 'ap-northeast-3',
                    name: 'ap-northeast-3'
                },
                {
                    label: 'ap-south-1',
                    name: 'ap-south-1'
                },
                {
                    label: 'ap-south-2',
                    name: 'ap-south-2'
                },
                {
                    label: 'ap-southeast-1',
                    name: 'ap-southeast-1'
                },
                {
                    label: 'ap-southeast-2',
                    name: 'ap-southeast-2'
                },
                {
                    label: 'ap-southeast-3',
                    name: 'ap-southeast-3'
                },
                {
                    label: 'ap-southeast-4',
                    name: 'ap-southeast-4'
                },
                {
                    label: 'ap-southeast-5',
                    name: 'ap-southeast-5'
                },
                {
                    label: 'ap-southeast-6',
                    name: 'ap-southeast-6'
                },
                {
                    label: 'ca-central-1',
                    name: 'ca-central-1'
                },
                {
                    label: 'ca-west-1',
                    name: 'ca-west-1'
                },
                {
                    label: 'cn-north-1',
                    name: 'cn-north-1'
                },
                {
                    label: 'cn-northwest-1',
                    name: 'cn-northwest-1'
                },
                {
                    label: 'eu-central-1',
                    name: 'eu-central-1'
                },
                {
                    label: 'eu-central-2',
                    name: 'eu-central-2'
                },
                {
                    label: 'eu-north-1',
                    name: 'eu-north-1'
                },
                {
                    label: 'eu-south-1',
                    name: 'eu-south-1'
                },
                {
                    label: 'eu-south-2',
                    name: 'eu-south-2'
                },
                {
                    label: 'eu-west-1',
                    name: 'eu-west-1'
                },
                {
                    label: 'eu-west-2',
                    name: 'eu-west-2'
                },
                {
                    label: 'eu-west-3',
                    name: 'eu-west-3'
                },
                {
                    label: 'il-central-1',
                    name: 'il-central-1'
                },
                {
                    label: 'me-central-1',
                    name: 'me-central-1'
                },
                {
                    label: 'me-south-1',
                    name: 'me-south-1'
                },
                {
                    label: 'sa-east-1',
                    name: 'sa-east-1'
                },
                {
                    label: 'us-east-1',
                    name: 'us-east-1'
                },
                {
                    label: 'us-east-2',
                    name: 'us-east-2'
                },
                {
                    label: 'us-gov-east-1',
                    name: 'us-gov-east-1'
                },
                {
                    label: 'us-gov-west-1',
                    name: 'us-gov-west-1'
                },
                {
                    label: 'us-west-1',
                    name: 'us-west-1'
                },
                {
                    label: 'us-west-2',
                    name: 'us-west-2'
                }
            ]
        }
    ]
}
